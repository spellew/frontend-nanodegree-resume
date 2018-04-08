const bio = {
  name: "Shamroy",
  role: "Front End Web Developer",
  contacts: {
    mobile: "(917) 719-0287",
    email: "spellew1298@gmail.com",
    github: "https://github.com/spellew",
    location: "New York"
  },
  welcomeMessage: "Nice to meet you!",
  skills: ["HTML5", "CSS3", "Javascript"],
  biopic: "https://i.imgur.com/cOh7UyS.jpg",
  display: function () {
    $("#header").append(HTMLheaderName.replace("%data%", this.name));
    $("#header").append(HTMLheaderRole.replace("%data%", this.role));
    [$("#topContacts"), $("#footerContacts")].forEach(el => {
      el.append(HTMLmobile.replace("%data%", this.contacts.mobile));
      el.append(HTMLemail.replace("%data%", this.contacts.email));
      el.append(HTMLgithub.replace("%data%", this.contacts.github));
      el.append(HTMLlocation.replace("%data%", this.contacts.location));
    })
    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    this.skills.forEach(skill => {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
  }
};
const education = {
  schools: [{
    name: "Brooklyn Technical High School",
    location: "29 Fort Greene Pl, Brooklyn, NY 11217",
    degree: "High School Diploma",
    majors: ["Mechatronics"],
    dates: "September 2014 - June 2018",
    url: "https://www.bths.edu/",
  }],
  onlineCourses: [{
    title: "Front-End Web Developer Nanodegree",
    school: "Udacity",
    dates: "June 2017 -",
    url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }],
  display: function () {
    this.schools.forEach(school => {
      const entry = $(HTMLschoolStart);
      $("#education").append(entry);
      entry.append(HTMLschoolName.replace("%data%", school.name).replace("#", school.url));
      entry.append(HTMLschoolDegree.replace("%data%", school.degree));
      entry.append(HTMLschoolDates.replace("%data%", school.dates));
      entry.append(HTMLschoolLocation.replace("%data%", school.location));
      school.majors.forEach(major => {
        entry.append(HTMLschoolMajor.replace("%data%", major));
      });
    });
    $("#education").append(HTMLonlineClasses);
    this.onlineCourses.forEach(course => {
      const entry = $(HTMLschoolStart);
      $("#education").append(entry);
      entry.append(HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url));
      entry.append(HTMLonlineSchool.replace("%data%", course.school));
      entry.append(HTMLonlineDates.replace("%data%", course.dates));
      entry.append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
    });
  }
};
const work = {
  jobs: [{
    employer: "The North Star Group",
    url: "http://www.thenorthstargroup.biz/",
    title: "Intern",
    location: "New York",
    dates: "July 2017 to August 2017",
    description: "Helped design web pages for yearly festival. Performed general office duties: photocopying, faxing, filing."
  }, {
    employer: "The Young Hackers",
    url: "http://theyounghackers.us/",
    title: "Organizer",
    location: "New York",
    dates: "In Progress",
    description: "Organize hackathons where high school students can collaborate and innovate. Establish partnerships with companies for sponsorships."
  }, {
    employer: "All Star Code",
    url: "http://www.allstarcode.org/",
    title: "SI.min Teaching Fellow",
    location: "New York",
    dates: "January 2017 to February 2017",
    description: "Instructed students in coding and computer science. Helped set up comfortable environment for students."
  }, {
    employer: "All Star Code",
    url: "http://www.allstarcode.org/",
    title: "Student Curriculum Aide",
    location: "New York",
    dates: "November 2016 to January 2017",
    description: "Worked under the Curriculum Manager. Assisted in crafting the All Star Code 2017 Summer Intensive Curriculum. Created and tested teaching materials."
  }],
  display: function () {
    this.jobs.forEach(job => {
      const entry = $(HTMLworkStart);
      $("#workExperience").append(entry);
      entry.append(HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url));
      entry.append(HTMLworkTitle.replace("%data%", job.title));
      entry.append(HTMLworkDates.replace("%data%", job.dates));
      entry.append(HTMLworkLocation.replace("%data%", job.location));
      entry.append(HTMLworkDescription.replace("%data%", job.description));
    })
  }
};
const projects = {
  projects: [{
    title: "Animal Trading Cards",
    url: "https://github.com/spellew/animal-trading-cards",
    dates: "July 2017", // (works with a hyphen between them)
    description: "Used my knowledge of HTML and CSS to create a web-based trading card depicting my favorite animal.",
    images: ["https://i.imgur.com/lTl7L6u.png"], // with string urls
  }, {
    title: "Build a Portfolio Site",
    url: "https://spellew.github.io/design-mockup-portfolio/",
    dates: "April 2018", // (works with a hyphen between them)
    description: "Developed a responsive website that serves as a template for my actual portfolio, which will display the actual images, descriptions and links to each of my completed portfolio projects.",
    images: ["https://i.imgur.com/iiwSf5c.png"] // with string urls
  }, {
    title: "Classic Arcade Game Clone",
    url: "https://spellew.github.io/frontend-nanodegree-arcade-game/",
    dates: "April 2018", // (works with a hyphen between them)
    description: "Recreation of the classic arcade game Frogger.",
    images: ["https://i.imgur.com/EtTe9uz.png"] // with string urls
  }],
  display: function () {
    this.projects.forEach(project => {
      const entry = $(HTMLprojectStart);
      $("#projects").append(entry);
      entry.append(HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url));
      entry.append(HTMLprojectDates.replace("%data%", project.dates));
      entry.append(HTMLprojectDescription.replace("%data%", project.description));
      project.images.forEach(image => {
        entry.append(HTMLprojectImage.replace("%data%", image));
      });
    })
  }
};
const mapMeta = {
  display: function() {
    $("#mapDiv").append(googleMap);
  }
}

bio.display();
education.display();
work.display();
projects.display();
mapMeta.display();