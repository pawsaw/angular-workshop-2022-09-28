interface Person {
  first: string;
  last: string;
  address: {
    city: string;
    country: string;
  };
}

const person: Person = {
  first: 'Max',
  last: 'Mustermann',
  address: {
    city: 'Hannover',
    country: 'Deutschland',
  },
};

function marry(person: Person, last: string, city: string): Person {
  return {
    ...person,
    last,
    address: {
      ...person.address,
      city,
    },
  };
}

const marriedPerson = marry(person, 'Musterfrau', 'Berlin');

function hasChanged(currPerson: Person, prevPerson: Person): boolean {
  // Run-Time complexity: O(n) with n := number of nodes + number of leaves
  // Is this possible in O(1) ???

  // This is possible, as simple reference check, if we assume we're working with immutables
  return (
    currPerson !== prevPerson
    // currPerson.first !== prevPerson.first ||
    // currPerson.last !== prevPerson.last ||
    // currPerson.address !== prevPerson.address ||
    // currPerson.address.city !== prevPerson.address.city ||
    // currPerson.address.country !== prevPerson.address.country
  );
}
