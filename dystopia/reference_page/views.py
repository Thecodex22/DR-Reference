from django.shortcuts import render_to_response
from django.template import RequestContext
from drsite.models import Spell, Profession, Nation

def drref(request):
	spells = Spell.objects.all()
	professions = Profession.objects.all()
	nations = Nation.objects.all()
	return render_to_response('drref_home.html', {'spells':spells, 'professions':professions, 'nations' : nations}, context_instance=RequestContext(request))