import { FC, useState, useEffect } from 'react';
import { Switch } from 'antd';
// import { useFetch } from 'use-http';

type Props = {
  checked: boolean;
}

export const UserSwitchStatusContainer: FC<Props> = ({ checked: _checked }) => {
  const [checked, setChecked] = useState(_checked);
  // const [] = useFetch();

  useEffect(() => {
    setChecked(_checked);
  }, [_checked]);

  return <Switch checked={checked} onChange={() => setChecked(!checked)} />;
}