export interface KaConfigVo {
  env: string;

  main: {

    microDictCode: string;

    isSetDefaultPage: boolean;
  
    newGroupInsertBefore: boolean;
  };

  product: {

    supportVop: boolean;
  };

  afs: {
   
    supportVop: boolean;
  };

  order: {
   
    isLoc: boolean;
  };
}
