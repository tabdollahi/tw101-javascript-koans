"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

function changeElementText(element, answer) {
    $(element).append(answer);
}

function addTextLine (element, text){
    $(element).append("<div>"+text+"</div>");
}

function formatAd(originalAd){
    for (var i = 0; i < originalAd.length; i++){
        addTextLine("#originalAd", originalAd[i].join(" "));
    }

    var correctedAd = originalAd[0].join(" ") + " " + originalAd[1].reverse().join(" ") + " " + originalAd[2].join(" ");

    changeElementText("#correctedText", correctedAd);
    changeElementText("#wordCount", correctedAd.split(" ").length);
}