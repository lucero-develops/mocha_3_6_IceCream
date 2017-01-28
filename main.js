/*
 * Programming Quiz: Ice Cream (3-6)
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// your code goes here
if ((flavor === "vanilla" || "chocolate") && 
(vessel === "cone" || "bowl") && (toppings === "sprinkles" || "peanuts")) {
	console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}