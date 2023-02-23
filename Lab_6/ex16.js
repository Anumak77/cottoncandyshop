const person = {
	firstName: "John",
	fullName: function() {
	  console.log("hello my name is " + this.firstName);
	}
  };

person.fullName();