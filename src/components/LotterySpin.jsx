import React, { useRef, useState } from "react";
import gsap from "gsap";
import * as Dialog from "@radix-ui/react-dialog";

const prizes = [
  { id: 1, text: "Prize 1", weight: 5 },
  { id: 2, text: "Prize 2", weight: 2 },
  { id: 3, text: "Prize 3", weight: 1 },
  { id: 4, text: "Prize 4", weight: 3 },
];

// weighted random function
function getWeightedWinner(items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let rand = Math.random() * totalWeight;
  for (let item of items) {
    if (rand < item.weight) return item;
    rand -= item.weight;
  }
}

const LotterySpin = () => {
  const wheelRef = useRef(null);
  const [winner, setWinner] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSpin = () => {
    const chosen = getWeightedWinner(prizes);
    setWinner(chosen);

    const segmentAngle = 360 / prizes.length;
    const winnerIndex = prizes.findIndex((p) => p.id === chosen.id);
    const finalAngle = 360 - (winnerIndex * segmentAngle + segmentAngle / 2);

    gsap.to(wheelRef.current, {
      rotation: `+=${360 * 5 + finalAngle}`, // 5 full spins + land
      duration: 12,
      ease: "power4.out",
      onComplete: () => {
        setOpen(true);
      },
    });
  };

  return (
    < div className="h-screen flex ">
      <div className="flex flex-col items-center">
      {/* Wheel */}
      <div
        ref={wheelRef}
        className="w-64 h-64 rounded-full border-4 border-gray-400 flex items-center justify-center"
        style={{
          background: `conic-gradient(
            #ff7675 0% 25%, 
            #74b9ff 25% 50%, 
            #55efc4 50% 75%, 
            #ffeaa7 75% 100%
          )`,
        }}
      >
        <div className="w-6 h-6 bg-black rounded-full"></div>
      </div>

      {/* Pointer */}
      <div className="mt-[-260px] w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-transparent border-b-red-600"></div>

      {/* Spin Button */}
      <button
        onClick={handleSpin}
        className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Spin
      </button>

      {/* Winner Popup */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-80">
            <Dialog.Title className="text-xl font-bold text-center">
              🎉 Congratulations!
            </Dialog.Title>
            <Dialog.Description className="mt-4 text-center">
              You won <span className="font-semibold">{winner?.text}</span> 🎁
            </Dialog.Description>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
    </div>
  );
};

export default LotterySpin;
