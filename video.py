print("Content-Type: text/html")
print()
import ssl
import cgi
import wave
import contextlib
form = cgi.FieldStorage()
fname = form.getvalue("video", "error")