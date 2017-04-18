print("Content-Type: text/html")


import cgi
import cgitb

form = cgi.FieldStorage()
fname = form["audio"].filename
print "Got filename:", fname
