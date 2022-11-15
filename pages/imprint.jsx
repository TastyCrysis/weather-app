import Link from "next/link";
import React from "react";

const imprint = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl p-4">Impressum</h1>

      <h2 className="text-2xl p-2">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p className="p-4">
        Philipp Gampe
        <br />
        Am Bergfeld 13
        <br />
        86495 Eurasburg
      </p>

      <h2 className="text-xl p-2">Kontakt</h2>
      <p>
        Telefon: 01702488443
        <br />
        E-Mail: gampep@yahoo.com
      </p>

      <p className="p-5 text-sm">
        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
      </p>

      <Link href="/#index">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default imprint;
