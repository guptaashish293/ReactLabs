import React from 'react'

export default function Eleven() {
    const Quotes=[

        `When short people smoke weed, they don’t get high. They get medium.`,
       `You know you’re short if you think the people on the wedding cake are the actual bride and groom.`,
        `How do short people go shopping for pants?
        They buy shorts.`,
        `It’s not that I am short, I simply have a built for speed and accuracy.`,
        `Why did the short guy buy the house with the water fountain?
        Because he’s always wanted to own a swimming pool.`,
        `Short people- We maintain a great perspective on life because we are always looking up!`,
        `For a basketball team, what position does a short player play?
        The ball.`,
        `What do short people call miniature golf?
        Golf.`,
        `What do short people call burritos?
        Sleeping bags.`,
        `I met a midget the other day and asked him “what is it like being a dwarf?”
        He replied “I’m not happy”
        I then said to him “well, which one are you then?”`,
        `I love short people. I find them to be more down to earth.`,
        `Have you ever noticed that there is a garment called shorts? Because I can’t recall ever seeing a piece of clothing called talls.`               
        ];

        const quote=Math.floor(Math.random()*Quotes.length);

  return (
    <div>
        <div>Eleven</div>
        <div>
            {Quotes[quote]}
        </div>
    </div>
   
  )
}
