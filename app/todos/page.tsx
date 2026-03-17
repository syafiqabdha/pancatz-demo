import { createClient } from '../../utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
  const supabase = createClient(await cookies());
  const { data, error } = await supabase.from('todos').select();

  if (error) {
    console.error('Supabase error:', error);
    return (
      <p>
        Could not load todos. Ensure a table named <code>todos</code> exists in your Supabase
        project (or adjust the query).
      </p>
    );
  }

  return (
    <ul>
      {data?.map((todo: any) => (
        <li key={todo.id ?? JSON.stringify(todo)}>{JSON.stringify(todo)}</li>
      ))}
    </ul>
  );
}
