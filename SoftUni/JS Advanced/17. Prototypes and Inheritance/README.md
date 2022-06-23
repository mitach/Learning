# Tasks

## 1. Person

Write a JS program which takes **first** & **last** names as **parameters** and returns an object with **firstName**, **lastName** and **fullName** ( **"{firstName} {lastName}"** ) properties which should be all accessible, we discovered that "accessible" also means "mutable". This means that:
* If **firstName** or **lastName** have changed, then **fullName** should also be changed.
* If **fullName** is changed, then **firstName** and **lastName** should also be changed.
* If **fullName** is **invalid**, you should not change the other properties.
*  A valid full name is in the format: **"{firstName} {lastName}"**.

## 2. Person and Teacher

Write a class **Person** and a class **Teacher** which extends **Person**. 
* The **Person** class should have a **name** and an **email**
* The **Teacher** class should have a **name**, an **email**, and a **subject**

## 3. Inheriting and Replacing ToString

Extend the **Person** and **Teacher** from the previous task and add a class **Student** inheriting from **Person** with additional property **course**. Add **toString()** functions to all classes, the formats should be as follows:
* **Person** - returns **"Person (name: {name}, email: {email})"**
* Student - returns **"Student (name: {name}, email: {email}, course: {course})"**
* Teacher - returns **"Teacher (name: {name}, email: {email}, subject: {subject})"**
Try to reuse code by using the **toString()** function of the base class.

## 4. Extend Prototype

Write a function that receives a **class** and attaches to it a property **species** with the value **"Human"** and a function **toSpeciesString()**. When called, the function returns a string with the format:
**"I am a {species}. {toString()}"**
The function **toString()** is called from the current instance (call using **this**).

## 5. Class Hierarchy

Write a function that returns **3** classes - **Figure**, **Circle**, and **Rectangle**.

**Figure**:
* Should have property units ("**m**", "**cm**", "**mm**") with default value "**cm**"
* Should have a **getter area**
* Has method **changeUnits** that sets different units for that figure 
* **Has method toString**, which returns: "**Figures units: {units}**"

**Circle**:
* Extends **Figure**
* Has a property **radius**
* Overrides **area** getter to return the area of the Circle (PI * r * r)
* **toString()** - should return a string representation of the figure in the format:
**"Figures units: {type} Area: {area} - radius: {radius}"**

**Rectangle**:
* Extends **Figure**
* Has properties **width**, **height**, and **units** (extended from the class Figure)
* Overrides **area** getter to return the area of the **Rectangle** (width * height)
* **toString()** - should return a string representation of the figure in the format:
**"Figures units: {type} Area: {area} - width: {width}, height: {height}"**

