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

tree = ET.parse('data.xml')
root = tree.getroot()

poi = ET.SubElement(root, 'poi')
poi.set('key', 'BESC')

name = ET.SubElement(poi, 'name')
name.text = 'Benson Earth Sciences'

latitude = ET.SubElement(poi, 'latitude')
latitude.text = '40.007921'

longitude = ET.SubElement(poi, 'longitude')
longitude.text = '105.265934'

category = ET.SubElement(poi, 'category')
category.text = 'Academic'

indent(root)

tree.write('data.xml')
