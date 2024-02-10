import React, { useState } from 'react';
import PlaceTree from './PlaceTree';
import { initialTravelPlan } from './Places';

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    if (!parent) return; 

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    };

    setPlan({
      ...plan,
      [parentId]: nextParent
    });
  };

  return (
    <div>
      <h1>Places to visit</h1>
      <ol>
        {plan[0].childIds.map(placeId => (
          <PlaceTree
            key={placeId}
            parentId={0}
            id={placeId}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </div>
  );
};

export default TravelPlan;