import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import IconButton from '@mui/material/IconButton';
import { IoCloseCircleOutline } from 'react-icons/io5';

import {
	Button,
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Main } from './style';
import useDogs from '../../hooks/api/useDogs';
import useSendRequest from '../../hooks/api/useSendRequest';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

export default function SendRequestForm(props) {
	const { token, host, setHostPage } = props;
	const { dogs, loadingDogs, listDogs } = useDogs(token);
	const { loadingSendRequest, sendRequest, SendRequestError } = useSendRequest();
	const [dateIn, setDateIn] = useState(null);
	const [dateOut, setDateOut] = useState(null);
	const [price, setPrice] = useState(0);
	const [dogName, setDogName] = useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setDogName(typeof value === 'string' ? value.split(',') : value);
	};

	useEffect(() => {
		if (token) {
			listDogs(token);
		}
	}, []);
	useEffect(() => {
		if (SendRequestError) {
			alert(SendRequestError);
		}
	}, [SendRequestError]);

	useEffect(() => {
		if (dateIn && dateOut) {
			const dif = dayjs(dateOut).diff(dayjs(dateIn), 'day', true);
			setPrice(dif * host.price * dogName.length);
		}
	}, [dateIn, dateOut, dogName]);

	function submitRequest() {
		const dogsRequested = [];

		dogs.forEach((element) => {
			if (dogName.includes(element.name)) dogsRequested.push(element.id);
		});

		if (!dateIn || !dateOut || !dogsRequested) {
			alert('Preencha os dados corretamente');
			return;
		}

		const requestData = {
			hostId: host.user.id,
			entryDate: dayjs(dateIn),
			departureDate: dayjs(dateOut),
			totalPrice: price,
			dogsIds: dogsRequested,
		};

		sendRequest(token, requestData);
		setHostPage(<></>);
	}

	return (
		<>
			<Main>
				<IconButton className="button-close" variant="outlined" onClick={() => setHostPage(<></>)}>
					<div className="icon">
						<IoCloseCircleOutline />
					</div>
				</IconButton>
				<h1>Fazer pedido de hospedagem:</h1>
				<h2>
					{host.user.name} {host.user.surname}
				</h2>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<div className="date-pickers">
						<div className="date">
							<DatePicker
								label="Data de entrada"
								value={dateIn}
								onChange={(newValue) => {
									setDateIn(newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</div>
						<DatePicker
							label="Data de saída"
							value={dateOut}
							onChange={(newValue) => {
								setDateOut(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</div>
				</LocalizationProvider>
				<div className="address">
					<p> {host.user.address}</p>
					<p> {host.user.city}</p>
				</div>
				<div className="preferences">
					<h3>Preferencias do anfitrião:</h3>
					<p>Peso minimo: {host.minWeight}kg</p>
					<p>Peso máximo: {host.maxWeight}kg</p>
				</div>
				<div className="host-price">
					<h3>Preço p/ noite: </h3>
					<p>R${host.price / 100}</p>
				</div>
				<div>
					{dogs ? (
						<FormControl sx={{ m: 1, width: 300 }}>
							<InputLabel>Dogs</InputLabel>
							<Select
								multiple
								value={dogName}
								onChange={handleChange}
								input={<OutlinedInput label="Tag" />}
								renderValue={(selected) => selected.join(', ')}
								MenuProps={MenuProps}
							>
								{dogs.map((elem) => (
									<MenuItem key={elem.id} value={elem.name}>
										<Checkbox checked={dogName.indexOf(elem.name) > -1} />
										<ListItemText primary={elem.name} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
					) : (
						<></>
					)}
				</div>
				<p className="price">Total: R${price / 100}</p>

				<div className="button-container">
					<Button className="button-form" variant="contained" onClick={submitRequest}>
						Enviar pedido
					</Button>
				</div>
			</Main>
		</>
	);
}
