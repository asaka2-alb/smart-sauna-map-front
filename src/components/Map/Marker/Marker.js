/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { MdThumbUpAlt } from 'react-icons/md';

// lat, lng を props に置かないと google-map-react に marker が表示されない.
// eslint-disable-next-line no-unused-vars
export function SaunaMarker({ lat, lng, sauna }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        startIcon={<MdThumbUpAlt />}
        size="small"
        style={{ fontSize: '10px', color: 'black' }}
        color="info"
        sx={{ minWidth: '60px' }}
      >
        {sauna.ikitai}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <PopupWindow sauna={sauna} />
      </Popover>
    </div>
  );
}

function PopupWindow({ sauna }) {
  /**
   * If nullable is `null`, nullable will be filled with `value`.
   * @param {number | null} nullable - `null` の可能性がある値。
   * @return {string} - `nullable` が `null` の場合は `--` を返す。
   */
  function fillNullAs(nullable) {
    const value = '--';
    return nullable ?? value;
  }

  const manSaunaTemperature = fillNullAs(sauna.mans_room?.sauna_temperature);
  const manMizuTemperature = fillNullAs(sauna.mans_room?.mizuburo_temperature);
  const womanSaunaTemperature = fillNullAs(sauna.womans_room?.sauna_temperature);
  const womanMizuTemperature = fillNullAs(sauna.womans_room?.mizuburo_temperature);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={sauna.image_url}
          alt="sauna"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {sauna.name} (イキタイ: {sauna.ikitai})
          </Typography>
          <Typography variant="body4" color="text.secondary" component="div">
            <pre>
              男; サ: {manSaunaTemperature} ℃ 水: {manMizuTemperature} ℃
              女; サ: {womanSaunaTemperature} ℃ 水: {womanMizuTemperature} ℃
            </pre>
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {sauna.description[0]} {sauna.description[1]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SaunaMarker;
