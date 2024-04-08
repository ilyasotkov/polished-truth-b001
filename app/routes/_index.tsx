import { Form } from '@remix-run/react';

export const loader = async () => {
  const r = new Request(`https://httpbin.org/get`);
  return await fetch(r);
};

export const action = async () => {
  return;
};

export default function ButtonForm() {
  return (
    <div>
      <Form method="post">
        <button type="submit">Send Request</button>
      </Form>
    </div>
  );
}
