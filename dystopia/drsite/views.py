from django.shortcuts import render_to_response
from django.template import RequestContext
from drsite.models import Spell, Profession, Nation


def home(request):
	spells = Spell.objects.all()
	professions = Profession.objects.all()
	nations = Nation.objects.all()
	return render_to_response('index.html', {'spells':spells, 'professions':professions, 'nations' : nations}, context_instance=RequestContext(request))

def login(requets):
	return render_to_response('user_home.html', {}, context_instance=RequestContext(request))