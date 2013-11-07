# tinykern.js

Inspired by [Lettering.js](http://letteringjs.com/), this is a lightweight minimal kerning thing for the very basic use case of "this font has a some terrible pairs".

Alphanumeric characters, dashes, and hyphens can be selected with `.char-a`, or `.char-cap-a` for uppercase characters. All characters can be selected using their hex code: `.code-20`.

**Q: Why?**  
A: I like kern pairs and I cannot lie.

**Q: I want something better.**  
A: There's [kerning.js](http://kerningjs.com/) - everything you ever needed in life.

## Usage

Include this file anywhere in your HTML. Then you can do stuff like:

    .char-a + .char-b { margin-left: 10px; }

If you'd still like to select the nth character, use `:nth-child()`.

`.char-a` versus `.char-cap-a` doesn't account for `text-transform`; you'll have to do that yourself.
