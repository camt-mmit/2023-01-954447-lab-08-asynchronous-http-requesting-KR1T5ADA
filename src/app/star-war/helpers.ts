import {
  RawList,
  RawResource,
  List,
  Resource,
  Person,
  RawPerson,
  Species,
  RawSpecies,
  RawPlanet,
  Planet,
} from './models';

export function parseResource(rawResource: RawResource): Resource {
  return {
    ...rawResource,
    created: new Date(rawResource.created),
    edited: new Date(rawResource.edited),
    url: new URL(rawResource.url),
  };
}

export function parseList(rawList: RawList<RawResource>): List<RawResource> {
  return {
    ...rawList,
    previous: rawList.previous ? new URL(rawList.previous) : null,
    next: rawList.next ? new URL(rawList.next) : null,
  };
}

//person

export function parsePerson(rawPerson: RawPerson): Person {
  return {
    ...rawPerson,
    ...parseResource(rawPerson),
    homeworld: new URL(rawPerson.homeworld),
    films: rawPerson.films.map((url) => new URL(url)),
    species: rawPerson.species.map((url) => new URL(url)),
    starships: rawPerson.starships.map((url) => new URL(url)),
    vehicles: rawPerson.vehicles.map((url) => new URL(url)),
  };
}

export function parsePeopleList(
  rawPeopleList: RawList<RawPerson>,
): List<Person> {
  return {
    ...parseList(rawPeopleList),
    results: rawPeopleList.results.map((result) => parsePerson(result)),
  };
}

//species

export function parseSpecies(rawSpecies: RawSpecies): Species {
  return {
    ...rawSpecies,
    ...parseResource(rawSpecies),
    people: rawSpecies.people.map((url) => new URL(url)),
    films: rawSpecies.films.map((url) => new URL(url)),
  };
}

export function parseSpeciesList(
  rawSpeciesList: RawList<RawSpecies>,
): List<Species> {
  return {
    ...parseList(rawSpeciesList),
    results: rawSpeciesList.results.map((result) => parseSpecies(result)),
  };
}

//planet
export function parsePlanet(rawPlanet: RawPlanet): Planet {
  return {
    ...rawPlanet,
    ...parseResource(rawPlanet),
    residents: rawPlanet.residents.map((url) => new URL(url)),
    films: rawPlanet.films.map((url) => new URL(url)),
  };
}

export function parsePlanetList(
  rawPlanetList: RawList<RawPlanet>,
): List<Planet> {
  return {
    ...parseList(rawPlanetList),
    results: rawPlanetList.results.map((result) => parsePlanet(result)),
  };
}
