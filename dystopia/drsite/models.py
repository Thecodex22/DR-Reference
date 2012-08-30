from django.db import models

#Holds all game spells
class Spell(models.Model):
	name = models.CharField(max_length=30)
	cost = models.IntegerField()
	description = models.TextField()
	prereq = models.ManyToManyField('self', symmetrical=False, null=True, blank=True)

	def __unicode__(self):
		return self.name

class OpenSkillList(models.Model):
	spells = models.ManyToManyField(Spell)
	train_cost = models.IntegerField()

#Holds nation advantages
class Buff(models.Model):
	name = models.CharField(max_length=30)
	description = models.TextField()

	def __unicode__(self):
		return self.name

#Holds nation disadvantages
class Debuff(models.Model):
	name = models.CharField(max_length=30)
	description = models.TextField()

	def __unicode__(self):
		return self.name

class Profession(models.Model):
	name = models.CharField(max_length=30)
	spells = models.ManyToManyField(Spell)
	prof_bio = models.TextField()
	roleplay_bio = models.TextField()

	def __unicode__(self):
		return self.name


class NationNick(models.Model):
	nick_one = models.CharField(max_length=20, blank=True)
	nick_two = models.CharField(max_length=20, blank=True)
	nick_three = models.CharField(max_length=20, blank=True)
	nick_four = models.CharField(max_length=20, blank=True)

class Nation(models.Model):
	name = models.CharField(max_length=30)
	nick_names = models.ForeignKey(NationNick)
	health = models.IntegerField()
	mind = models.IntegerField()
	infection = models.IntegerField()

	description = models.TextField()
	requirnment = models.TextField()

	buffs = models.ManyToManyField(Buff)
	debuffs = models.ManyToManyField(Debuff)

	spells = models.ManyToManyField(Spell)

	def __unicode__(self):
		return self.name