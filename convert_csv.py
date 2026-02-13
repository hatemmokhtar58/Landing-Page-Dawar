import csv
import json

# Read CSV and group by region
regions_data = {}

with open('Branch.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        region = row['city_ar'].strip()
        name = row['name_ar'].strip()
        link = row['link']
        
        if region not in regions_data:
            regions_data[region] = []
        
        regions_data[region].append({
            'name': name,
            'mapsUrl': link
        })

# Map region names to standardized names
region_mapping = {
    'المنطقة الوسطى': 'المنطقة الوسطى',
    'المنطقة الغربية ': 'المنطقة الغربية',
    'المنطقة الشرقية': 'المنطقة الشرقية',
    'المنطقة الجنوبية ': 'المنطقة الجنوبية',
    'المنطقة الشمالية ': 'المنطقة الشمالية',
    'خارج المملكة العربية السعودية ': 'خارج المملكة'
}

# Reorganize by standardized regions
final_regions = {}
for region, branches in regions_data.items():
    standard_region = region_mapping.get(region, region)
    if standard_region not in final_regions:
        final_regions[standard_region] = []
    final_regions[standard_region].extend(branches)

# Print JavaScript code
print("const BRANCHES = [")
for region, branches in final_regions.items():
    print(f'  {{')
    print(f'    region: "{region}",')
    print(f'    branches: [')
    for branch in branches:
        print(f'      {{ name: "{branch["name"]}", mapsUrl: "{branch["mapsUrl"]}" }},')
    print(f'    ]')
    print(f'  }},')
print("];")

# Save to file
with open('branches_output.js', 'w', encoding='utf-8') as f:
    f.write("const BRANCHES = [\n")
    for region, branches in final_regions.items():
        f.write(f'  {{\n')
        f.write(f'    region: "{region}",\n')
        f.write(f'    branches: [\n')
        for branch in branches:
            f.write(f'      {{ name: "{branch["name"]}", mapsUrl: "{branch["mapsUrl"]}" }},\n')
        f.write(f'    ]\n')
        f.write(f'  }},\n')
    f.write("];\n")

print("\nOutput saved to branches_output.js")
