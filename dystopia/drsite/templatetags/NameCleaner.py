from django import template

register = template.Library()

@register.filter
def clipspace(value):
	words= value.split(' ')
	delim = '-'
	fullname = delim.join(words)
	return fullname

@register.filter
def cutapos(value):
	return value.replace("'", "")