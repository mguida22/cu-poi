import xml.etree.ElementTree as ET

def indent(elem, level=0):
    i = "\n" + level*"  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + "  "
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
        for elem in elem:
            indent(elem, level+1)
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i

run = True
while(run):
    tree = ET.parse('data.xml')
    root = tree.getroot()

    poi = ET.SubElement(root, 'poi')
    poi.set('key', input('Enter key: '))

    name = ET.SubElement(poi, 'name')
    name.text = input('Enter name: ')

    latitude = ET.SubElement(poi, 'latitude')
    latitude.text = input('Enter lat: ')

    longitude = ET.SubElement(poi, 'longitude')
    longitude.text = input('Enter long: ')

    category = ET.SubElement(poi, 'category')
    category.text = input('Enter category: ')

    indent(root)

    tree.write('data.xml')

    runAgain = input('Add another POI? (y/n): ')
    if (runAgain == 'n'):
        run = False