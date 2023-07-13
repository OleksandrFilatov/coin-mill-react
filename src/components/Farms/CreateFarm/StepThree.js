import { Box, Grid, Slider, Button, Switch, Checkbox } from '@material-ui/core';
import {
	FaLongArrowAltRight,
	FaLongArrowAltLeft,
} from 'react-icons/fa'

const StepThree = ({farmTypeChild, setStepChild}) => {
    console.log("3-- ", farmTypeChild);
    return(
        <>
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >Incentivize users to stake longer</Box>
            <Grid container style={{marginTop:'19px'}}>
                <Grid item md={2} sm={2} xs={2}></Grid>
                <Grid item md={8} sm={8} xs={8}>
                    <Box
						sx={{
							background: '#2D3137',
							border: '1px solid #56606C',
							boxSizing: 'border-box',
							borderRadius: '12px',
							padding: '35px',
							cursor: 'pointer',
                            fontSize: '16px'
						}}
					>    
                        <Box
							sx={{
								fontWeight: 'normal',
								fontSize: '24px',
								lineHeight: '37px',
							}}
						>{farmTypeChild === "Garden" ? "Stake time user reward multiplier" : "User Reward Vesting"}</Box>
                        <Box mt={2.5}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    From {farmTypeChild === "Garden" ? "3x" : "60%"}
                                </Grid>
                                <Grid item xs>
                                     <Slider aria-labelledby="continuous-slider" style={{color:'#FF5E15'}} />
                                </Grid>
                                <Grid item>
                                    To {farmTypeChild === "Garden" ? "5x" : "100%"}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mt={2.5} display="flex" alignItems="center">
                            <Box mr={2.5}>{farmTypeChild} lifetime:</Box>
                            <Button
                                sx={{
                                    backgroundColor: '#353B42',
                                    borderRadius: '6px',
                                    padding: '8px 14px',
                                    color: '#FFFFFF',
                                    textTransform: 'none'
                                }}
                            >100 days</Button>
                        </Box>
                        <Box mt={2.5}>{ farmTypeChild === "Garden" ? 
                            "Multiplier builds up linearly from to 3x during 100 days. l.e. If user staked for 20 days the multiplier will be 3.4x" : 
                            "User's rewards will be unlocked linearly from 60% to 100%  over 100 days. l.e. If User unstakes after 20 days their rewards are unlocked at 68%"}</Box>
                        <Box mt={2.5} display="flex" alignItems="center">
                            <img src="/static/icons/infoIcon.svg" alt="info" sstyle={{zoom:'0.8', marginRight:'5px'}} />
                            <Box mr={4}>Active:</Box>
                            <Box mr={2}>Immediately</Box>
                            <Switch
                                // checked={state.checkedA}
                                // onChange={handleChange}
                                style={{
                                    color:'#FF5E15',
                                    marginRight: '15px'
                                }}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Box mr={2.5}>Later</Box>
                            <Button
                                sx={{
                                    backgroundColor: '#353B42',
                                    borderRadius: '6px',
                                    padding: '8px 14px',
                                    color: '#FFFFFF',
                                    textTransform: 'none'
                                }}
                            >Choose date</Button>
                        </Box>
                        <Box mt={2.5} display="flex" alignItems="center">
                            <img src="/static/icons/infoIcon.svg" alt="info" style={{zoom:'0.8', marginRight:'5px'}} />
                            <Box mr={3}>Private:</Box>
                            <Checkbox
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                style={{ color: '#FF5E15'}}
                            />
                            <Button
                                sx={{
                                    backgroundColor: '#353B42',
                                    borderRadius: '6px',
                                    padding: '8px 14px',
                                    color: '#FFFFFF',
                                    textTransform: 'none',
                                    marginLeft: '24px'
                                }}
                            >Please input the addresses of the wallets</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2} sm={2} xs={2}></Grid>
            </Grid>
            <Box display='flex' justifyContent="space-between" mt={3}>
				<Button
					sx={{
						border: '1px solid #56606C',
						backgroundColor: '#353B42',
						boxSizing: 'border-box',
						borderRadius: '6px',
						fontStyle: 'normal',
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '24px',
						padding: '13px 40px',
						textTransform: 'none',
					}}
					onClick={()=>setStepChild(2)}
				>
					<FaLongArrowAltLeft style={{marginRight: '20px'}}/>
					Previous
				</Button>
				<Button
					variant="contained"
					sx={{
						backgroundColor: '#FF5E15',
						borderRadius: '6px',
						fontStyle: 'normal',
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '24px',
						padding: '13px 51px',
						textTransform: 'none',
					}}
					onClick={()=>setStepChild(4)}
				>
					Next
					<FaLongArrowAltRight style={{marginLeft: '20px'}}/>
				</Button>
			</Box>
        </>
    )
}

export default StepThree;