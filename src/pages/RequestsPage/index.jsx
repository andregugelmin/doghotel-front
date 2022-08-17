import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Button } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import { Dogs, Main } from './style';
import useGetRequests from '../../hooks/api/useGetRequests';
import useUpdateRequest from '../../hooks/api/useUpdateRequest';

export default function RequestPage() {
	const { token, user } = useAuth();
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [value, setValue] = useState('guest');
	const [requestId, setRequestId] = useState(0);
	const [accept, setAccept] = useState(false);
	const { loadingGetRequests, getRequests, GetRequestsError, requests } = useGetRequests();
	const { loadingUpdateRequest, updateRequest, UpdateRequestError } = useUpdateRequest();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		getRequests(token, value);
	}, [value]);

	useEffect(() => {
		if (GetRequestsError) console.log('Houve um problema ao carregar pedidos');
	}, [GetRequestsError]);
	useEffect(() => {
		if (UpdateRequestError) console.log('Houve um problema ao atualizar pedido');
	}, [UpdateRequestError]);

	useEffect(() => {
		if (!loadingUpdateRequest) {
			getRequests(token, value);
		}
	}, [loadingUpdateRequest]);

	const handleCancel = (id) => {
		setMessage('Deseja cancelar o pedido?');
		setRequestId(id);
		setOpen(true);
		setAccept(false);
	};

	const handleReject = (id) => {
		setMessage('Deseja rejeitar o pedido?');
		setRequestId(id);
		setOpen(true);
		setAccept(false);
	};

	const handleAccept = (id) => {
		setMessage('Deseja aceitar o pedido?');
		setRequestId(id);
		setOpen(true);
		setAccept(true);
	};

	return (
		<>
			<Header token={token} user={user}></Header>
			<Main>
				{user.isHost ? (
					<Tabs className="tabs" value={value} onChange={handleChange}>
						<Tab className="tab" value="guest" label="Enviados" />
						<Tab className="tab" value="host" label="Recebidos" />
					</Tabs>
				) : (
					<Tabs className="tabs" value={value} onChange={handleChange}>
						<Tab className="tab" value="guest" label="Enviados" />
					</Tabs>
				)}

				<div className="requests">
					{requests && requests.length > 0 ? (
						<div>
							<h2 className="white-title">Pedidos Pendentes</h2>
							{requests.map((elem, i) => {
								return !elem.isAccepted ? (
									<div key={i} className="request-box">
										<h3>
											{elem.host
												? `Anfitrião: ${elem.host.name} ${elem.host.surname}`
												: `Tutor: ${elem.guest.name} ${elem.guest.surname}`}
										</h3>
										<p>
											Data da hospedagem: {dayjs(elem.entryDate).format('DD/MM')} à{' '}
											{dayjs(elem.departureDate).format('DD/MM')}
										</p>
										<p>Preço da hospedagem: R${elem.totalPrice / 100}</p>
										<div className="situation">
											<p>Status:</p>
											{elem.isActive ? <p className="pendent"> Pendente</p> : <></>}
											{!elem.isActive ? <p className="rejected">Recusado </p> : <></>}
										</div>
										<DogsComponent dogs={elem.dogs} />
										{elem.host ? (
											<div className="buttons">
												<Button variant="outlined" className="cancel-button" onClick={() => handleCancel(elem.id)}>
													Cancelar Pedido
												</Button>
											</div>
										) : (
											<div className="buttons">
												<Button variant="outlined" className="accept-button" onClick={() => handleAccept(elem.id)}>
													Aceitar Pedido
												</Button>
												<Button variant="outlined" className="cancel-button" onClick={() => handleReject(elem.id)}>
													Rejeitar Pedido
												</Button>
											</div>
										)}
									</div>
								) : (
									<h3 className="white-title">Nenhum pedido pendente</h3>
								);
							})}
							<div className="divisor"></div>
							<h2 className="white-title">Pedidos Aceitos</h2>
							{requests.map((elem, i) => {
								return elem.isAccepted && elem.isActive ? (
									<div key={i} className="request-box">
										<h3>
											{elem.host
												? `Anfitrião: ${elem.host.name} ${elem.host.surname}`
												: `Tutor: ${elem.guest.name} ${elem.guest.surname}`}
										</h3>
										<p>
											Data da hospedagem: {dayjs(elem.entryDate).format('DD/MM')} à{' '}
											{dayjs(elem.departureDate).format('DD/MM')}
										</p>
										<p>Preço da hospedagem: R${elem.totalPrice / 100}</p>
										<div className="situation">
											<p>Status:</p>
											<p className="accepted"> Aceito</p>
										</div>
										<DogsComponent dogs={elem.dogs} />
										{elem.host ? (
											<div className="buttons">
												<Button variant="outlined" className="cancel-button" onClick={() => handleCancel(elem.id)}>
													Cancelar Pedido
												</Button>
											</div>
										) : (
											<div className="buttons">
												<Button variant="outlined" className="cancel-button" onClick={() => handleCancel(elem.id)}>
													Cancelar Pedido
												</Button>
											</div>
										)}
									</div>
								) : (
									<>
										<h3 className="white-title">Nenhum pedido aceito</h3>
									</>
								);
							})}
						</div>
					) : (
						<>
							<h2 className="white-title">Pedidos Pendentes</h2>
							<h3 className="white-title">Nenhum pedido pendente</h3>
							<div className="divisor"></div>
							<h2 className="white-title">Pedidos Aceitos</h2>
							<h3 className="white-title">Nenhum pedido aceito</h3>
						</>
					)}
				</div>
				{open ? (
					<AlertDialog
						updateRequest={updateRequest}
						token={token}
						setOpen={setOpen}
						message={message}
						open={open}
						id={requestId}
						accept={accept}
					/>
				) : (
					<></>
				)}
			</Main>
		</>
	);
}

function DogsComponent(props) {
	const { dogs } = props;

	return (
		<Dogs>
			Dogs:
			<div className="dogs-container">
				{dogs.map((elem, i) => {
					return (
						<div key={i} className="dogs-box">
							<h3>{elem.name}</h3>
							<p>{elem.weight}kg</p>
							{elem.gender === 'Male' ? <p>Macho</p> : <p>Fêmea</p>}
							<p>{elem.breed}</p>
							{elem.isNeutered ? <p>Castrado</p> : <p>Não castrado</p>}
						</div>
					);
				})}
			</div>
		</Dogs>
	);
}

function AlertDialog(props) {
	const { token, updateRequest, open, setOpen, message, id, accept } = props;

	function rejectRequest(requestId) {
		updateRequest(token, { id: requestId }, 'reject');
	}

	function acceptRequest(requestId) {
		updateRequest(token, { id: requestId }, 'accept');
	}

	const handleClose = () => {
		setOpen(false);
	};

	const handleAccept = () => {
		setOpen(false);
		if (accept) acceptRequest(id);
		else rejectRequest(id);
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>
					<DialogContentText i>{message}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button onClick={handleAccept} autoFocus>
						Confirmar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
