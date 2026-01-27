"use client"
import Image from 'next/image';
import { Instagram, Menu, X, ChevronDown, ChevronUp, Glasses, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarcasOpen, setIsMarcasOpen] = useState(false);
  const marcasRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMarcas = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMarcasOpen(!isMarcasOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (marcasRef.current && !marcasRef.current.contains(event.target as Node)) {
        setIsMarcasOpen(false);
      }
    };

    if (isMarcasOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMarcasOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full fixed top-0 z-50 font-poppins font-[500] flex bg-gradient-to-r from-red-600 to-red-800 text-white items-center justify-around p-4">
        <Link href="/" aria-label="Página Inicial">
          <Image
            className="w-32"
            src="/img/Logos/Logo_Lorgil.svg"
            width={128}
            height={40}
            alt="Logo Lorgil"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center">
            <Glasses />
            <h1 className="text-sm md:text-base lg:text-3xl font-bold px-4 py-2 rounded-lg bg-red-800 text-white">
              <span className="font-extrabold"> Uma ótica diferente para você ver o mundo</span>!
            </h1>
            <li className="relative" ref={marcasRef}>
              <button
                type="button"
                onClick={toggleMarcas}
                className="flex items-center gap-1 hover:text-red-300 transition-colors focus:outline-none "
              >
                MARCAS
                {isMarcasOpen ?
                  <ChevronUp className="w-4 h-4" /> :
                  <ChevronDown className="w-4 h-4" />
                }
              </button>
              {isMarcasOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-red-800 rounded shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#Mormaii';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Mormaii
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#JeanPierre';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Jean Pierre
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#Colcci';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Colcci
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#Lavorato';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Lavorato
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#Fiamma';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Fiamma
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#DusterConcept';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Duster Concept
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#CarolCazassa';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Carol Cazassa
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#Vilenev';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Vileney
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          window.location.hash = '#Nanff';
                          setIsMarcasOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 transition-colors"
                      >
                        Nanff
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div className="hidden flex justify-center gap-2 md:flex">
          <a href="https://www.instagram.com/lorgilotica/">
            <Instagram className="cursor-pointer" />
          </a>
          <div className="cursor-pointer">
            <a href="#mapas"><MapPin /></a>
          </div>
        </div>

        <button
          type="button"
          ref={hamburgerRef}
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full left-0 w-full bg-red-700 z-50 md:hidden"
          >
            <nav className="p-4">
              <ul className="flex flex-col gap-4">
                <li ref={marcasRef}>
                  <button
                    type="button"
                    onClick={toggleMarcas}
                    className="flex items-center gap-1 py-2 w-full text-left hover:text-red-300 transition-colors focus:outline-none"
                  >
                    MARCAS
                    {isMarcasOpen ?
                      <ChevronUp className="w-4 h-4" /> :
                      <ChevronDown className="w-4 h-4" />
                    }
                  </button>
                  {isMarcasOpen && (
                    <div className="pl-4 mt-2 border-l border-red-600">
                      <div className="grid grid-cols-2 gap-2">
                        <button type="button" onClick={() => {
                          window.location.hash = '#Mormaii';
                          setIsMarcasOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Mormaii</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#JeanPierre';
                          setIsMarcasOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Jean Pierre</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#Colcci';
                          setIsMarcasOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Colcci</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#Lavorato';
                          setIsMarcasOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Lavorato</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#Fiamma';
                          setIsMarcasOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Fiamma</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#DusterConcept';
                          setIsMarcasOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Duster</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#CarolCazassa';
                          setIsMarcasOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Carol</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#Vilenev';
                          setIsMarcasOpen(false);
                          setIsMenuOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Vileney</span>
                        </button>
                        <button type="button" onClick={() => {
                          window.location.hash = '#Nanff';
                          setIsMarcasOpen(false);
                          setIsMenuOpen(false);
                        }} className="flex flex-col items-center p-2 bg-red-800/30 rounded hover:bg-red-800/50 transition-colors text-center">
                          <Glasses className="w-5 h-5 mb-1" />
                          <span className="text-xs">Nanff</span>
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-red-600 flex items-center gap-4">
                <a href="https://www.instagram.com/lorgilotica/">
                  <Instagram className="w-6 h-6 cursor-pointer" />
                </a>

              </div>
            </nav>
          </div>
        )}

      </header>
      { }
      <div className="pt-24"></div> { }

    </>
  );
}

export default Header;