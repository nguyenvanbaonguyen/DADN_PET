import React, {useCallback, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Appear from '../Appear/Appear';
import TextCustom from '../TextCustom/TextCustom';
import ViewCustom from '../ViewCustom/ViewCustom';

const BLOCKS_FIRST = 1;
const BLOCKS_CONSECUTIVE = 1;

const Pagination = () => {
  const [page, setPage] = useState(1);
  const numsPage = 10;
  const isOne = page - BLOCKS_CONSECUTIVE >= BLOCKS_FIRST + 1;
  const isLeft = page - BLOCKS_CONSECUTIVE > BLOCKS_FIRST + 1;
  const isMax = page + BLOCKS_CONSECUTIVE < numsPage;
  const isRight = page + BLOCKS_CONSECUTIVE < numsPage - 1;

  const start = Math.max(page - BLOCKS_CONSECUTIVE, 1);
  const end = Math.min(page + BLOCKS_CONSECUTIVE, numsPage);
  const numberCentre = end - start + 1;

  const Block = useCallback(
    ({pageDisplay, disable = false}: any) => {
      const isActive = pageDisplay === page;
      const blockActive = isActive ? styles.blockActive : {};

      const handleSetPage = () => {
        if (disable) return;
        setPage(pageDisplay);
      };
      return (
        <Pressable
          onPress={handleSetPage}
          style={[styles.blockStyle, blockActive]}>
          <TextCustom type="fs-14" style={blockActive}>
            {pageDisplay}
          </TextCustom>
        </Pressable>
      );
    },
    [page, setPage],
  );

  return (
    <ViewCustom layout="ai-c fd-r mt-20">
      {/* <TbChevronsLeft size={16} /> */}
      <ViewCustom layout="mx-1 fd-r">
        <Appear condition={isOne}>
          <Block pageDisplay={1} />
        </Appear>
        <Appear condition={isLeft}>
          <Block pageDisplay={'...'} disable />
        </Appear>

        {[...Array(numberCentre).keys()].map(index => (
          <Block pageDisplay={index + start} />
        ))}

        <Appear condition={isRight}>
          <Block pageDisplay={'...'} disable />
        </Appear>
        <Appear condition={isMax}>
          <Block pageDisplay={numsPage} />
        </Appear>
      </ViewCustom>
      {/* <TbChevronsRight size={16} /> */}
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  blockStyle: {
    width: 35,
    height: 35,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockActive: {
    backgroundColor: '#0172CB',
    color: 'white',
  },
});

export default Pagination;
