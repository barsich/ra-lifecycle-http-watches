import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WatchesForm from './WatchesForm';
import WatchesList from './WatchesList';

export default function Watches() {

  const [nameFromForm, setNameFromForm] = useState('');
  const [timezoneFromForm, setTimezoneFromForm] = useState(0);
  const [watchItems, setWatchItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameFromForm === '') {
      return;
    }
    setWatchItems((prevWatchItems) => {
      const sameDateItem = prevWatchItems.find((item) => item.name === nameFromForm);
      if (sameDateItem) {
        return null;
      } else {
        return [
          ...prevWatchItems,
          {
            id: uuidv4(),
            name: nameFromForm,
            timezone: timezoneFromForm,
          },
        ];
      }
    });
    setNameFromForm('');
    setTimezoneFromForm(0);
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setNameFromForm(target.value);
        break;
      case 'timezone':
        setTimezoneFromForm(target.value);
        break;
      default:
        break;
    }
  };

  const handleDelete = (id) => {
    setWatchItems((prevWatchItems) => prevWatchItems.filter((item) => item.id !== id));
  };

  return (
    <div className="watches">
      <WatchesForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        name={nameFromForm}
        timezone={timezoneFromForm}
      />
      <WatchesList watches={watchItems} onDelete={handleDelete} />
    </div>
  );
}
