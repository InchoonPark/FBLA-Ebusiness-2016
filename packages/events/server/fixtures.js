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
		color: "#1abc9c",
		packages: "premium",
		participantNum: 60
	});
	Events.insert({
		title: "National Tolkien Reading Day",
		start: new Date("March 25, 2016 8:00:00"),
		allDay: true,
		color: "#1abc9c",
		packages: "premium",
		participantNum: 395
	});
	Events.insert({
		title: "National Spinach Day",
		start: new Date("March 26, 2016 8:00:00"),
		allDay: true,
		color: "#1abc9c",
		packages: "basic",
		participantNum: 10
	});
	Events.insert({
		title: "National Star Wars Day",
		start: new Date("March 17, 2016 8:00:00"),
		allDay: true,
		color: "#1abc9c",
		packages: "premium",
		participantNum: 500
	});
	Events.insert({
		title: "",
		start: new Date("March 17, 2016 8:00:00"),
		allDay: true,
		color: "#1abc9c",
		packages: "premium",
		participantNum: 500
	});

}
