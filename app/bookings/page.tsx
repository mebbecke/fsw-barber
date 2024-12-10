import { getServerSession } from "next-auth"
import { notFound } from "next/navigation"

import { Header } from "../_components/header"
import { authOptions } from "../_lib/auth"
import { BookingItem } from "../_components/booking-item"
import { getConfirmedBookings } from "../_data/get-confirmed-bookings"
import { getConcludedBookings } from "../_data/get-concluded-bookings"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    // TODO: mostrar modal de login
    return notFound()
  }

  const confirmedBookings = await getConfirmedBookings()
  const concludedBookings = await getConcludedBookings()

  return (
    <>
      <Header />

      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        {/* TODO: implementar renderização condicional para o caso de
        não haver reservas confirmadas */}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <div key={booking.id}>
                <BookingItem booking={booking} />
              </div>
            ))}
          </>
        )}

        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            {concludedBookings.map((booking) => (
              <div key={booking.id}>
                <BookingItem booking={booking} />
              </div>
            ))}
          </>
        )}

        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-xs">Você ainda não possui agendamentos.</p>
        )}
      </div>
    </>
  )
}

export default Bookings
