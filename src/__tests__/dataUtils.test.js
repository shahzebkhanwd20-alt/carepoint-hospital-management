import {describe,expect,it} from 'vitest';
import {paginate,toCsv} from '../lib/dataUtils';

describe('toCsv',()=>{
  it('exports rows with headers and escaped values',()=>{
    expect(toCsv([{name:'A "Patient"',amount:25},{name:'B',amount:10}])).toBe('"name","amount"\n"A ""Patient""","25"\n"B","10"');
  });
  it('returns an empty string for no rows',()=>expect(toCsv([])).toBe(''));
});

describe('paginate',()=>{
  it('returns the requested page',()=>expect(paginate([1,2,3,4,5],2,2)).toEqual([3,4]));
  it('clamps invalid page and size to one',()=>expect(paginate([1,2,3],0,0)).toEqual([1]));
});
