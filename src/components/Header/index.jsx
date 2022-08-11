import { Avatar, Button, CssBaseline, Menu, MenuItem } from '@mui/material';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { HeaderTheme, Main } from './style';
import { ThemeProvider } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

export default function Header(props) {
	const navigate = useNavigate();
	const { signOut } = useAuth();
	const { token, user } = props;
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function setProfileMenu() {
		return !token ? (
			<>
				<Button
					variant="outlined"
					color="primary"
					onClick={() => {
						navigate('/entrar');
					}}
				>
					Entrar
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						navigate('/cadastro');
					}}
				>
					Criar conta
				</Button>
			</>
		) : (
			<div className="profile-active">
				<Avatar sx={{ bgcolor: deepOrange[900] }}></Avatar>
				<Button
					id="positioned-button"
					aria-controls={open ? 'positioned-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onMouseEnter={handleClick}
				>
					<p>{user.name}</p>
					<div className="icon">
						<IoChevronDownSharp />
					</div>
				</Button>
				<Menu
					id="positioned-menu"
					aria-labelledby="positioned-button"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					<MenuItem onClick={handleClose}>Perfil</MenuItem>
					<MenuItem onClick={() => navigate('/meus-dogs')}>Meus Dogs</MenuItem>
					<MenuItem onClick={signOut}>Desconectar</MenuItem>
				</Menu>
			</div>
		);
	}

	const profileMenu = setProfileMenu();

	return (
		<Main>
			<div className="middle">
				<p onClick={() => navigate('/')}>Encontrar anfitrião</p>
				<p onClick={() => navigate('/seja-um-anfitriao')}>Quero ser anfitrião</p>
			</div>

			<ThemeProvider theme={HeaderTheme}>
				<CssBaseline enableColorScheme />
				<div className="profile">{profileMenu}</div>
			</ThemeProvider>
		</Main>
	);
}
