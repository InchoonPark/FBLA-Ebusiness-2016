//fixtures
if(!Events.findOne()){
	Events.insert({
		title: "Dennis's wedding",
		start: new Date("March 2, 2016 11:00:00"),
		end: new Date("March 2, 2016 14:00:00"),
		packages: "basic",
		participantNum: 30
	});
	Events.insert({
		title: "Aakarsh's wedding",
		start: new Date("March 8, 2016 16:00:00"),
		end: new Date("March 8, 2016 19:00:00"),
		packages: "plus",
		participantNum: 67
	});

	Events.insert({
		title: "FBLA Party",
		start: new Date("March 13, 2016 17:00:00"),
		end: new Date("March 13, 2016 21:00:00"),
		packages: "premium",
		participantNum: 130
	});
	Events.insert({
		title: "Wine tasting",
		start: new Date("February 27, 2016 14:00:00"),
		end: new Date("February 27, 2016 16:00:00"),
		packages: "plus",
		participantNum: 120
	});
	Events.insert({
		title: "National Goat day",
		start: new Date("March 23, 2016 8:00:00"),
		allDay: true,
		color: "#1abc9c",
		packages: "basic",
		participantNum: 10
	});
	Events.insert({
		title: "Run",
		start: new Date("March 9, 2016 7:00:00"),
		end: new Date("March 9, 2016 15:00:00"),
		packages: "premium",
		participantNum: 153
	});
	Events.insert({
		title: "Jeffrey Khong and Grace Lam's Zesty Wedding",
		start: new Date("March 2, 2016 14:00:00"),
		end: new Date("March 2, 2016 18:00:00"),
		packages: "premium",
		participantNum: 146
	});
	Events.insert({
		title: "Dance!",
		start: new Date("March 26, 2016 18:00:00"),
		end: new Date("March 26, 2016 22:00:00"),
		packages: "premium",
		participantNum: 190
	});
	Events.insert({
		title: "Spring Break Party!",
		start: new Date("March 11, 2016 13:00:00"),
		end: new Date("March 11, 2016 23:59:59"),
		packages: "premium",
		participantNum: 200
	});
	Events.insert({
		title: "Biotech Corporate Awards",
		start: new Date("March 29, 2016 19:00:00"),
		end: new Date("March 29, 2016 22:00:00"),
		packages: "premium",
		participantNum: 48
	});
	Events.insert({
		title: "Swim!",
		start: new Date("March 1, 2016 3:00:00"),
		end: new Date("March 1, 2016 8:00:00"),
		packages: "plus",
		participantNum: 32
	});
	Events.insert({
		title: "Hollywood Movies Banquet",
		start: new Date("March 25, 2016 16:00:00"),
		end: new Date("March 25, 2016 23:59:59"),
		packages: "premium",
		participantNum: 200
	});

	Events.insert({
		title: "Prayer",
		start: new Date("March 31, 2016 18:00:00"),
		end: new Date("March 31, 2016 22:00:00"),
		packages: "plus",
		participantNum: 190
	});
	Events.insert({
		title: "John Mayer Concert",
		start: new Date("April 9, 2016 19:00:00"),
		end: new Date("April 9, 2016 22:00:00"),
		packages: "premium",
		participantNum: 15
	});
	Events.insert({
		title: "Win FBLA",
		start: new Date("April 16, 2016 18:00:00"),
		end: new Date("April 16, 2016 22:00:00"),
		packages: "premium",
		participantNum: 500
	});
	Events.insert({
		title: "April Fools!",
		start: new Date("April 1, 2016 2:00:00"),
		end: new Date("April 1, 2016 22:00:00"),
		packages: "basic",
		participantNum: 67
	});
	Events.insert({
		title: "Basketball Game",
		start: new Date("March 10, 2016 17:00:00"),
		end: new Date("March 10, 2016 23:00:00"),
		packages: "premium",
		participantNum: 15
	});
	Events.insert({
		title: "Meteor Awards Ceremony",
		start: new Date("March 14, 2016 19:00:00"),
		end: new Date("March 14, 2016 22:00:00"),
		packages: "premium",
		participantNum: 498
	});
	Events.insert({
		title: "Eat Pie",
		start: new Date("March 14, 2016 6:00:00"),
		end: new Date("March 14, 2016 12:00:00"),
		packages: "premium",
		participantNum: 260
	});
	Events.insert({
		title: "National Pound Cake Day",
		start: new Date("March 4, 2016 8:00:00"),
		allDay: true,
		packages: "premium",
		participantNum: 60
	});
	Events.insert({
		title: "National Tolkien Reading Day",
		start: new Date("March 25, 2016 8:00:00"),
		allDay: true,
		packages: "premium",
		participantNum: 395
	});
	Events.insert({
		title: "National Spinach Day",
		start: new Date("March 26, 2016 8:00:00"),
		allDay: true,
		packages: "basic",
		participantNum: 10
	});
	Events.insert({
		title: "National Star Wars Day",
		start: new Date("March 17, 2016 8:00:00"),
		allDay: true,
		packages: "premium",
		participantNum: 500
	});
	Events.insert({
		title: "Denenapowe Tribe Celebration",
		start: new Date("April 18, 2016 8:00:00"),
		end: new Date("April 18, 2016 20:00:00"),
		packages: "premium",
		participantNum: 300
	});
	Events.insert({
		title: "AIAA Banquet",
		start: new Date("April 22, 2016 16:00:00"),
		end: new Date("April 22, 2016 18:00:00"),
		packages: "basic",
		participantNum: 50
	});
	Events.insert({
		title: "Cypress Community Awards",
		start: new Date("April 28, 2016 16:00:00"),
		end: new Date("April 28, 2016 17:00:00"),
		packages: "plus",
		participantNum: 26
	});
	Events.insert({
		title: "Star Trek Convention",
		start: new Date("April 28, 2016 12:00:00"),
		end: new Date("April 28, 2016 23:00:00"),
		packages: "premium",
		participantNum: 200
	});
	Events.insert({
		title: "Oxford Prom",
		start: new Date("April 27, 2016 18:00:00"),
		end: new Date("April 27, 2016 22:00:00"),
		packages: "premium",
		participantNum: 250
	});
	Events.insert({
		title: "AAA Awards Ceremony",
		start: new Date("May 2, 2016 14:00:00"),
		end: new Date("May 2, 2016 18:00:00"),
		packages: "plus",
		participantNum: 120
	});
	Events.insert({
		title: "Cake Ceremony",
		start: new Date("May 5, 2016 8:00:00"),
		end: new Date("May 5, 2016 12:00:00"),
		packages: "basic",
		participantNum: 165
	});
	Events.insert({
		title: "Star Wars Convention",
		start: new Date("May 3, 2016 8:00:00"),
		end: new Date("May 3, 2016 22:00:00"),
		packages: "premium",
		participantNum: 500
	});
	Events.insert({
		title: "TVA Awards Ceremony",
		start: new Date("May 6, 2016 6:00:00"),
		end: new Date("May 6, 2016 8:00:00"),
		packages: "basic",
		participantNum: 200
	});
	Events.insert({
		title: "Back to the Future",
		start: new Date("May 11, 2016 8:00:00"),
		end: new Date("May 11, 2016 12:00:00"),
		packages: "plus",
		participantNum: 20
	});
	Events.insert({
		title: "SSA Banquet",
		start: new Date("May 19, 2016 15:00:00"),
		end: new Date("May 19, 2016 18:00:00"),
		packages: "premium",
		participantNum: 300
	});
	Events.insert({
		title: "Calculus Party",
		start: new Date("May 25, 2016 8:00:00"),
		end: new Date("May 25, 2016 9:00:00"),
		packages: "plus",
		participantNum: 314
	});
	Events.insert({
		title: "FSA Banquet",
		start: new Date("May 27, 2016 16:00:00"),
		end: new Date("May 27, 2016 18:00:00"),
		packages: "premium",
		participantNum: 205
	});
	Events.insert({
		title: "Scholarship Presentations",
		start: new Date("May 31, 2016 16:00:00"),
		end: new Date("May 31, 2016 19:00:00"),
		packages: "premium",
		participantNum: 400
	});
	Events.insert({
		title: "Graduation",
		start: new Date("June 1, 2016 20:00:00"),
		end: new Date("June 1, 2016 22:00:00"),
		packages: "basic",
		participantNum: 250
	});
	Events.insert({
		title: "FBLA Banquet",
		start: new Date("June 3, 2016 18:00:00"),
		end: new Date("June 3, 2016 21:00:00"),
		packages: "premium",
		participantNum: 310
	});
	Events.insert({
		title: "FBLA Awards Ceremony",
		start: new Date("June 11, 2016 10:00:00"),
		end: new Date("June 11, 2016 13:00:00"),
		packages: "plus",
		participantNum: 130
	});
	Events.insert({
		title: "Denena's Wedding",
		start: new Date("June 14, 2016 16:00:00"),
		end: new Date("June 14, 2016 23:00:00"),
		packages: "premium",
		participantNum: 500
	});
	Events.insert({
		title: "Christine's Wedding",
		start: new Date("June 18, 2016 20:00:00"),
		end: new Date("June 18, 2016 23:00:00"),
		packages: "basic",
		participantNum: 100
	});
	Events.insert({
		title: "Meteor Banquet",
		start: new Date("June 22, 2016 17:00:00"),
		end: new Date("June 22, 2016 19:00:00"),
		packages: "plus",
		participantNum: 210
	});
	Events.insert({
		title: "Dennis's Birthday Celebration",
		start: new Date("June 25, 2016 3:00:00"),
		end: new Date("June 25, 2016 4:00:00"),
		packages: "basic",
		participantNum: 21
	});
	Events.insert({
		title: "Atlanta",
		start: new Date("June 28, 2016 10:00:00"),
		end: new Date("June 28, 2016 12:00:00"),
		packages: "premium",
		participantNum: 100
	});
	Events.insert({
		title: "FBLA Awards and Dance",
		start: new Date("July 3, 2016 16:00:00"),
		end: new Date("July 3, 2016 18:00:00"),
		packages: "premium",
		participantNum: 200
	});
}
