from bs4 import BeautifulSoup
import requests

url = "https://investigaciones.unad.edu.co/PSemilleros/Ver/1970"
response = requests.get(url)

if response.status_code == 200:
  soup = BeautifulSoup(response.text, "html.parser")

  # Ejemplo genérico: extraer los párrafos o bloques de texto institucional
  # (Dependerá de las clases o IDs específicos del HTML de la UNAD)
  #secciones = soup.find_all("p")
  #for p in secciones:
  #  print(p.text)
  print(soup)
else:
  print("Error al acceder a la página")
