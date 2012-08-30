from django.contrib import admin
from drsite.models import *


class SpellAdmin(admin.ModelAdmin):
	search_fields = ('name',)
	filter_horizontal = ('prereq',)

class ProfessionAdmin(admin.ModelAdmin):
	filter_horizontal = ('spells',)
	search_fields = ('name',)

admin.site.register(Spell, SpellAdmin)
admin.site.register(OpenSkillList)
admin.site.register(Buff)
admin.site.register(Debuff)
admin.site.register(Profession, ProfessionAdmin)
admin.site.register(NationNick)
admin.site.register(Nation)