import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("");
  const [cups, setCups] = useState<number>(1);

  function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups });
  }
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Number of Cups:</label>
        <input
          type="number"
          value={cups}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value))}
          min={1}
        />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default OrderForm;
