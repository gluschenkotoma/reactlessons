//ЗАРЕНДЕРИТЬ ПО УСЛОВИЮ
// 1.Если isOnline = true ->зарендерить Онлайн
// 2.Если isOnline = true ->зарендерить Онлайн, в противном случае -> Офлайн
export default function App() {
  const isOnline = false;
  return (
    <div>
      {isOnline && 'Онлайн'}
      {isOnline ? 'Онлайн' : 'Офлайн'}
    </div>
  );
}
