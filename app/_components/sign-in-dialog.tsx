import Image from "next/image"
import { signIn } from "next-auth/react"

import { DialogContent, DialogDescription, DialogTitle } from "./ui/dialog"
import { DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"

const SignInDialog = () => {
  const handleSignInWithGoogle = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça seu login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google.
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleSignInWithGoogle}
      >
        <Image
          alt="Fazer login com o Google"
          src="/google.svg"
          height={18}
          width={18}
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
