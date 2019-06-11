// import React from 'react';

// const HeaderForMobile = ({
//   isBurgerAndFooter,
//   handleClickBtnBack,
//   handleCloseBurger,
//   handleOpenBurger,
//   isBurgerOpen,
// }) => {
//   <div>
//     {isBurgerAndFooter ? (
//       <Button handleClick={this.handleOpenBurger} style={s.burgerBtn}>
//         <div className={`${s.burgerLine} ${isBurgerOpen && s.burgerLineTop}`} />
//         <div
//           className={`${s.burgerLine} ${isBurgerOpen && s.burgerLineMiddle}`}
//         />
//         <div
//           className={`${s.burgerLine} ${isBurgerOpen && s.burgerLineBottom}`}
//         />
//       </Button>
//     ) : (
//       <Button handleClick={handleClickBtnBack} style={s.burgerArrowBtn}>
//         <Arrow className={s.icon} />
//       </Button>
//     )}

//     <Logo />

//     {isBurgerOpen && (
//       <BurgerNav
//         link={this.backdropRef}
//         isBurgerOpen={isBurgerOpen}
//         handleCloseBurger={this.handleCloseBurger}
//       />
//     )}
//   </div>;
// };
