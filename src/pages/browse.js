import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import { BrowseContainer } from '../containers/browse';

export default function Browse() {
  // we need the series and films
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });
  console.log(slides);
  // pass it to teh browse container
  return <BrowseContainer slides={slides} />;
}
