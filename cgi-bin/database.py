#!/usr/bin/env python

import cgitb
import cgi
import sqlite3

console.log("start PYTHON")
cgib.enable()
form_form = cgi.FieldStorage()
conn = sqlite3.connect('crowd.db')
c = conn.cursor()
c.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER primary key, name varchar(100), email varchar[100], username varchar(100), password(100))')


def add_user(name, username, email, password):

	c.execute('INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)', (name, username, email, password)
	conn.comit()

	name = form_form['name'].value
	username = form_form['username'].value
	email = form_form['email'].value
	password = form_form['password'].value
	comfirmPassword = form_form['comfirm'].value


	currentData = c.execute('SELECT * FROM users WHERE username = ?', [username])
	data = c.fetchall()

	if str(password) != str(confirmPassword):
		//ERROR

	elif len(data) == 0:

		add_user(name, username, email, password)

console.log('trying')

name = form_form['name'].value
username = form_form['username'].value
email = form_form['email'].value
password = form_form['password'].value
comfirmPassword = form_form['comfirm'].value
	
	
currentData = c.execute('SELECT * FROM users WHERE username = ?', [username])
data = c.fetchall()
	
if str(password) != str(confirmPassword):
	//ERROR
		
elif len(data) == 0:
	add_user(name, username, email, password)
