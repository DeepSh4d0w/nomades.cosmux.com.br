const cards_suit = {
  cups: "♥",
  coins: "♦",
  clubs: "♣",
  sword: "♠",
};

const cards_value = {
  ace: "a",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eigth: "8",
  nine: "9",
  ten: "10",
  jeck: "j",
  queen: "q",
  king: "k",
};

function cardParser(card) {
  const [color, suit, value] = String(card).toLowerCase().split(":");

  return {
    color,
    suit: cards_suit[suit],
    value: cards_value[value],
  };
}

const deck = [
  // Copas Vermelhas
  "RED:CUPS:ACE",
  "RED:CUPS:TWO",
  "RED:CUPS:THREE",
  "RED:CUPS:FOUR",
  "RED:CUPS:FIVE",
  "RED:CUPS:SIX",
  "RED:CUPS:SEVEN",
  "RED:CUPS:EIGTH",
  "RED:CUPS:NINE",
  "RED:CUPS:TEN",
  "RED:CUPS:JECK",
  "RED:CUPS:QUEEN",
  "RED:CUPS:KING",

  // Ouros Vermelha
  "RED:COINS:ACE",
  "RED:COINS:TWO",
  "RED:COINS:THREE",
  "RED:COINS:FOUR",
  "RED:COINS:FIVE",
  "RED:COINS:SIX",
  "RED:COINS:SEVEN",
  "RED:COINS:EIGTH",
  "RED:COINS:NINE",
  "RED:COINS:TEN",
  "RED:COINS:JECK",
  "RED:COINS:QUEEN",
  "RED:COINS:KING",

  //Paus Pretas
  "BLACK:CLUBS:ACE",
  "BLACK:CLUBS:TWO",
  "BLACK:CLUBS:THREE",
  "BLACK:CLUBS:FOUR",
  "BLACK:CLUBS:FIVE",
  "BLACK:CLUBS:SIX",
  "BLACK:CLUBS:SEVEN",
  "BLACK:CLUBS:EIGTH",
  "BLACK:CLUBS:NINE",
  "BLACK:CLUBS:TEN",
  "BLACK:CLUBS:JECK",
  "BLACK:CLUBS:QUEEN",
  "BLACK:CLUBS:KING",

  //Espadas Pretas
  "BLACK:SWORD:ACE",
  "BLACK:SWORD:TWO",
  "BLACK:SWORD:THREE",
  "BLACK:SWORD:FOUR",
  "BLACK:SWORD:FIVE",
  "BLACK:SWORD:SIX",
  "BLACK:SWORD:SEVEN",
  "BLACK:SWORD:EIGTH",
  "BLACK:SWORD:NINE",
  "BLACK:SWORD:TEN",
  "BLACK:SWORD:JECK",
  "BLACK:SWORD:QUEEN",
  "BLACK:SWORD:KING",
];

function Card({ props }) {
  return (
    <div
      data-color={props.color}
      className="w-28 h-40 bg-zinc-200 rounded-sm data-[color=back]:text-zinc-950 data-[color=red]:text-red-600 flex flex-col justify-center items-center gap-2"
    >
      <span className="text-4xl">{props.value}</span>
      <span className="text-5xl">{props.suit}</span>
    </div>
  );
}

function shuffle(deck) {
  for (const index in deck) {
    const j = Math.floor(Math.random() * index);

    const element = deck[index - 1];

    deck[index - 1] = deck[j];
    deck[j] = element;
  }
}

export default function Home() {
  // console.log(deck);
  shuffle(deck);

  return (
    <main>
      <div className="grid grid-cols-9 gap-4">
        {deck.map((card, i) => {
          return <Card key={i} props={cardParser(card)} />;
        })}
      </div>
    </main>
  );
}
