import { createClient } from '../../utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos, error } = await supabase.from('todos').select();

  if (error) {
    console.error('Supabase error:', error);
    return <p>Failed to load todos.</p>;
  }

  return (
    <ul>
      {todos?.map((todo: any, idx: number) => (
        <li key={idx}>{JSON.stringify(todo)}</li>
      ))}
    </ul>
  );
}
