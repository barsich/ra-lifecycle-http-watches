import WatchesItem from './WatchItem';

export default function WatchesList({ watches, onDelete }) {
  return (
    <div className="watches__list">
      {watches.map((item) => (
        <WatchesItem item={item} key={item.id} onDelete={onDelete} />
      ))}
    </div>
  );
}
