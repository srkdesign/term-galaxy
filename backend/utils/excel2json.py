import pandas as pd
import os

file = os.path.join(os.path.dirname(__file__), "excel_edited.xlsx")
# print(file)
excel_data = pd.read_excel(file, engine="openpyxl", header=[0], keep_default_na=False)
# print(excel_data.head())

json_data = excel_data.to_json(orient="records", indent=2)
# print(json_data)

with open(os.path.join(os.getcwd(), "frontend/data/db.json"), "w") as f:
    f.write(json_data.lower())