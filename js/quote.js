const quotes = [
  {
    quote: "한낱 빛 따위가 어둠의 깊이를 어찌 알랴.",
    author: "Nietzsche",
  },
  {
    quote:
      "먼 곳을 항해하는 배가 풍파를 만나지 않고 조용히만 갈 수는 없다. 풍파는 언제나 전진하는 자의 벗이다. 차라리 고난 속에 인생의 기쁨이 있다. 풍파 없는 항해, 얼마나 단조로운가! 고난이 심할수록 내 가슴은 뛴다.",
    author: "Nietzsche",
  },
  {
    quote:
      "네 운명을 사랑하라. 이것이 지금부터 나의 사랑이 될 것이다! 나는 추한 것과 전쟁을 벌이지 않으련다. 나는 비난하지 않으련다. 나를 비난하는 자도 비난하지 않으련다.",
    author: "Nietzsche",
  },
  {
    quote: "몇 번이라도 좋다. 이 끔찍한 삶이여 다시 한 번!",
    author: "Nietzsche",
  },
  {
    quote:
      "그대의 영혼 속에 깃들어 있는 영웅을 절대 버리지 않기를 그대가 희망하는 삶의 최고봉을 계속 거룩한 곳으로 여기며 똑바로 응시하기를.",
    author: "Nietzsche",
  },
  {
    quote:
      "아무것도 성취하지 못했을지라도 자신을 존경하라. 거기에 상황을 바꿀 힘이 있으니. 자신을 함부로 비하하지 말라. 멋진 인생을 만드는 첫걸음은 바로 자신을 존경하는 것이다",
    author: "Nietzsche",
  },
  {
    quote:
      "괴물과 싸우는 사람은 스스로 괴물이 되지 않도록 조심해야 한다. 우리가 괴물의 심연을 오래 들여다보면, 심연 또한 우리를 들여다본다.",
    author: "Nietzsche",
  },
  {
    quote: "상처에 의해 정신은 고양되고, 새 힘은 솟아 오른다.",
    author: "Nietzsche",
  },
  {
    quote: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다.",
    author: "Nietzsche",
  },
  {
    quote:
      "가장 작은 것, 가장 조용한 것, 가장 가벼운 것, 바스락거리는 도마뱀 몸짓, 숨결 하나, 휙 하는 소리, 한 순간. 작은 게 최상의 행복을 만든다.",
    author: "Nietzsche",
  },
];

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
