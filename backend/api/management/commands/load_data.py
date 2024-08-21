from django.core.management.base import BaseCommand
import json
from api.models import Word, Translation

def process_json_data(json_data):
    # Проверяем, что данные содержат ключ 'words'
    if isinstance(json_data, dict) and 'words' in json_data:
        words_data = json_data['words']
        
        # Проверяем, что 'words' является списком
        if isinstance(words_data, list):
            for item in words_data:
                # Проверяем, что каждый элемент списка является словарем
                if isinstance(item, dict):
                    # Сначала создаем объект Word
                    word, created = Word.objects.get_or_create(
                        entry=item.get('entry', ''),
                        defaults={
                            'meaning': item.get('meaning', ''),
                            'published': item.get('published', ''),
                            'source': item.get('source', '')
                        }
                    )
                    
                    # Обрабатываем переводы
                    translations = item.get('translations', {})
                    for lang_code, trans in translations.items():
                        # Обновляем или создаем объект Translation
                        Translation.objects.update_or_create(
                            word=word,
                            language=lang_code,
                            defaults={
                                'entry': trans.get('entry', ''),
                                'meaning': trans.get('meaning', '')
                            }
                        )
                else:
                    print('Ошибка: каждый элемент данных в "words" должен быть словарем')
        else:
            print('Ошибка: "words" должен быть списком словарей')
    else:
        print('Ошибка: данные должны содержать ключ "words" и быть словарем')

if __name__ == "__main__":

    with open('data.json', 'r', encoding='utf-8') as file:
        try:
            json_data = json.load(file)
            process_json_data(json_data)
            print('Данные успешно загружены и обработаны.')
        except json.JSONDecodeError:
            print('Ошибка: Неверный формат JSON')

class Command(BaseCommand):
    help = 'Load data from JSON file into the database'

    def handle(self, *args, **kwargs):

        with open('utils/data.json', 'r', encoding='utf-8') as file:
            try:
                json_data = json.load(file)
            except json.JSONDecodeError:
                self.stdout.write(self.style.ERROR('Ошибка: Неверный формат JSON'))
                return

        process_json_data(json_data)
        self.stdout.write(self.style.SUCCESS('Data loaded successfully'))