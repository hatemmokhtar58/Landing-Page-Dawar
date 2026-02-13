import csv
from collections import defaultdict

# Read CSV file
regions = defaultdict(list)

with open('Branch.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        region_raw = row['city_ar'].strip()
        name = row['name_ar'].strip()
        link = row['link']
        
        # Normalize region names
        if 'الوسطى' in region_raw or 'central' in row['city_en']:
            region = 'المنطقة الوسطى'
        elif 'الغربية' in region_raw or 'Western' in row['city_en']:
            region = 'المنطقة الغربية'
        elif 'الشرقية' in region_raw or 'Eastern' in row['city_en']:
            region = 'المنطقة الشرقية'
        elif 'الجنوبية' in region_raw or 'southern' in row['city_en']:
            region = 'المنطقة الجنوبية'
        elif 'الشمالية' in region_raw or 'Northern' in row['city_en']:
            region = 'المنطقة الشمالية'
        elif 'خارج' in region_raw or 'Outside' in row['city_en']:
            region = 'خارج المملكة'
        else:
            region = region_raw
        
        regions[region].append({'name': name, 'link': link})

# Generate JavaScript
print("// Generated from Branch.csv")
print("const BRANCHES = [")

for region in ['المنطقة الوسطى', 'المنطقة الغربية', 'المنطقة الشرقية', 'المنطقة الجنوبية', 'المنطقة الشمالية', 'خارج المملكة']:
    if region in regions:
        print(f'  {{')
        print(f'    region: "{region}",')
        print(f'    branches: [')
        for branch in regions[region]:
            name_clean = branch['name'].replace('"', '\\"')
            print(f'      {{ name: "{name_clean}", mapsUrl: "{branch["link"]}" }},')
        print(f'    ]')
        print(f'  }},')

print("];")

# Print summary
print("\n// Summary:")
for region in regions:
    print(f"// {region}: {len(regions[region])} فرع")
total = sum(len(branches) for branches in regions.values())
print(f"// المجموع الكلي: {total} فرع")
