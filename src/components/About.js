import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";

const About = () => (
  <Fragment>
    <Container style={{ marginTop: "45px" }}>
      <h1>FLASH CARDS</h1>
      <p>
        A flashcard or flash card is a card bearing information, as words or
        numbers, on either or both sides, used in classroom drills or in private
        study. One writes a question on a side and an answer overleaf.
        Flashcards can bear vocabulary, historical dates, formulae or any
        subject matter that can be learned via a question-and-answer format.
        Flashcards are widely used as a learning drill to aid memorization. They
        are often associated with spaced repetition, i.e. reviewed at expanding
        time intervals.
      </p>
      <hr />
      <h3>USE</h3>
      <p>
        Flashcards exercise the mental process of active recall: given a prompt
        (the question), one produces the answer. Beyond the content of cards,
        which are collected in decks, there is the question of use – how does
        one use the cards, in particular, how frequently does one review (more
        finely, how does one schedule review) and how does one react to errors,
        either complete failures to recall or mistakes? Various systems have
        been developed, mostly based around spaced repetition – increasing the
        time intervals between reviews whenever a card is recalled correctly.
      </p>
      <h3>TWO SIDED</h3>
      <p>
        Physical flashcards are two-sided; in some context one wishes to
        correctly produce the opposite side on being presented with either side,
        such as in foreign language vocabulary; in other context one is content
        to go in only one direction, such as in producing a poem given its title
        or incipit (opening). For physical flashcards, one may either use a
        single card, flipping it according to the direction, or two parallel
        decks, such as one English-Japanese and one Japanese-English. They have
        a number of uses that can be very simple or very elaborate for the
        person to memorize.
      </p>
    </Container>
  </Fragment>
);

export default About;
