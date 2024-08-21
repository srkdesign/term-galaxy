import pandas as pd
import json
from datetime import datetime

def convert_xlsx_to_json(xlsx_file, json_file):

    df = pd.read_excel(xlsx_file)

    words_list = []

    for idx, row in df.iterrows():
        word_entry = {
            "id": int(row['id']),
            "entry": row['entry'],
            "meaning": row['meaning'],
            "translations": {
                "ru": {
                    "entry": row['ru_entry'],
                    "meaning": row['ru_meaning']
                },
                "az": {
                    "entry": row['az_entry'],
                    "meaning": row['az_meaning']
                }
            },
            "source": row['source'],
            "published": datetime.now().isoformat() + 'Z'
        }
        words_list.append(word_entry)
    
    json_data = {"words": words_list}
    
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)

def replace_NaN(file_path, old_word, new_word):
    
  with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()
  
  result = content.replace(old_word, new_word)

  with open(file_path, "w", encoding="utf-8") as f:
     f.write(result)

convert_xlsx_to_json('data.xlsx', 'data.json')
replace_NaN('data.json', 'NaN', '"Not Found"')